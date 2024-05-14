import React, { ChangeEvent, KeyboardEvent, useState } from 'react';

import { Button, TextField } from '@mui/material';
import axios from 'axios';

import { TabWithContent } from '../../../components/TabWithContent';

interface Card {
  quantity: number;
  card: {
    name: string;
  };
}

interface Mainboard {
  cards: Record<string, Card>;
}

interface Deck {
  name: string;
  boards: {
    mainboard: Mainboard;
  };
}

function SecondaryPage() {
  const [inputValue, setInputValue] = useState('');
  const [numTextFields, setNumTextFields] = useState(0);
  const [deckUrls, setDeckUrls] = useState<string[]>([]);
  const [deckData, setDeckData] = useState<Deck[]>([]); // Type the state as Deck[]

  // Calculate card occurrences
  const getCardOccurrences = (): Record<string, number> => {
    const occurrences: Record<string, number> = {};
    deckData.forEach((deck) => {
      Object.values(deck.boards.mainboard.cards).forEach((card) => {
        const cardName = card.card.name;
        occurrences[cardName] = (occurrences[cardName] || 0) + card.quantity;
      });
    });
    return occurrences;
  };

  const createTabItems = () => {
    const occurrences = getCardOccurrences();
    const groupedOccurrences: Record<number, string[]> = {};
    Object.entries(occurrences).forEach(([card, count]) => {
      if (!groupedOccurrences[count]) {
        groupedOccurrences[count] = [];
      }
      groupedOccurrences[count].push(card);
    });

    return Object.entries(groupedOccurrences)
      .sort(([a], [b]) => parseInt(b) - parseInt(a)) // Ensure numeric sorting
      .map(([count, cards]) => ({
        name: `${count} ${count === '1' ? 'Occurrence' : 'Occurrences'}`,
        content: (
          <div>
            {cards.map((card, index) => (
              <div key={index}>{card}</div>
            ))}
          </div>
        ),
      }));
  };

  const formatDeckData = (
    deckData: Deck[]
  ): { name: string; cards: string[] }[] => {
    return deckData.map((deck) => {
      const cards = Object.values(deck.boards.mainboard.cards).map(
        (cardInfo) => `${cardInfo.quantity} ${cardInfo.card.name}`
      );

      return {
        name: deck.name,
        cards: cards,
      };
    });
  };

  const decks = formatDeckData(deckData);
  console.log('deckData: ', deckData);
  console.log('decks: ', decks);
  const tabs = [
    {
      name: 'Common Cards Across Decks',
      content: <TabWithContent tabItems={createTabItems()} />,
    },
    {
      name: 'Type and Tag Percentage',
      content: <>2</>,
    },
    {
      name: 'Price Sorter (MTG Goldfish)',
      content: <>3</>,
    },
    // Add more tabs as needed
  ];

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeckUrlChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newUrls = [...deckUrls];
      newUrls[index] = e.target.value;
      setDeckUrls(newUrls);
    };

  const handleKeyPress = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      const number = parseInt(inputValue, 10);
      if (!isNaN(number) && number > 0) {
        setNumTextFields(number);
        setDeckUrls(new Array(number).fill(''));
      } else {
        setNumTextFields(0);
        setDeckUrls([]);
      }
    }
  };

  const extractDeckId = (url: string) => {
    const parts = url.split('/');
    return parts[parts.length - 1];
  };

  const fetchDeckData = async () => {
    try {
      const requests = deckUrls.map((url) => {
        const deckId = extractDeckId(url);
        return axios.get(`/api/${deckId}`);
      });
      const results = await Promise.all(requests);
      setDeckData(results.map((result) => result.data));
    } catch (error) {
      console.error('Error fetching deck data:', error);
      // Handle errors as needed
    }
  };

  return (
    <div>
      <TextField
        id='outlined-number'
        label='Number'
        placeholder='Count of how many decks to analyze, then press Enter on keyboard'
        type='number'
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        InputLabelProps={{ shrink: true }}
      />
      <div>
        {Array.from({ length: numTextFields }).map((_, index) => (
          <TextField
            key={index}
            id={`outlined-multiline-${index}`}
            label={`Deck ${index + 1} Moxfield URL`}
            type='text'
            value={deckUrls[index] || ''}
            onChange={handleDeckUrlChange(index)}
          />
        ))}
      </div>
      {numTextFields !== 0 ? (
        <>
          <Button fullWidth variant='contained' onClick={fetchDeckData}>
            Submit {numTextFields} decks
          </Button>
        </>
      ) : (
        ''
      )}

      {/* Render Tabbed Items and other elements */}

      {deckData.length !== 0 ? (
        <>
          <TabWithContent tabItems={tabs} />
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default SecondaryPage;
