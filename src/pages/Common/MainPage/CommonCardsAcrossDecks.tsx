import React, { useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { TabWithContent } from '../../../components/TabWithContent';

function CommonCardsAcrossDecks() {
  const [numDecks, setNumDecks] = useState(0);
  const [cardCounts, setCardCounts] = useState<{ [key: string]: number }>({});
  const [inputValue, setInputValue] = useState('');
  const [decks, setDecks] = useState<string[]>([]);
  const [groupedCommonCards, setGroupedCommonCards] = useState<{
    [key: string]: string[];
  }>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  const handleDeckChange =
    (index: number) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const newDecks = [...decks];
      newDecks[index] = e.target.value;
      setDecks(newDecks);
    };

  const handleGenerateDecks = () => {
    const decksCount = parseInt(inputValue, 10);
    setNumDecks(decksCount);
    setDecks(new Array(decksCount).fill(''));
  };

  const handleGenerateCommonCards = () => {
    const cardOccurrences: { [key: string]: number } = {};
    const localCardCounts: { [key: string]: number } = {};
    const groupedCards: { [key: string]: string[] } = {};

    decks.forEach((deck) => {
      const cards = deck.split('\n').filter((card) => card.trim() !== '');
      const seenInThisDeck: { [key: string]: boolean } = {};

      cards.forEach((card) => {
        const firstSpaceIndex = card.indexOf(' ');
        const count = parseInt(card.substring(0, firstSpaceIndex), 10);
        const name = card.substring(firstSpaceIndex + 1).trim();

        localCardCounts[name] = (localCardCounts[name] || 0) + count;

        if (!seenInThisDeck[name]) {
          cardOccurrences[name] = (cardOccurrences[name] || 0) + 1;
          seenInThisDeck[name] = true;
        }
      });
    });

    Object.entries(cardOccurrences).forEach(([name, occurrenceCount]) => {
      if (!groupedCards[occurrenceCount]) {
        groupedCards[occurrenceCount] = [];
      }
      groupedCards[occurrenceCount].push(`${localCardCounts[name]} ${name}`);
    });

    setGroupedCommonCards(groupedCards);
    setCardCounts(localCardCounts); // Update the cardCounts state
  };

  return (
    <div>
      {' '}
      <TextField
        id='outlined-number'
        label='Number of Decks'
        placeholder='Number of how many decks to compare'
        type='number'
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleGenerateDecks();
          }
        }}
        InputLabelProps={{ shrink: true }}
      />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={6}>
            {decks.length !== 0 ? (
              <div>
                Input: Deck List, Paste Here
                {decks.map((deck, index) => (
                  <TextField
                    key={index}
                    id={`outlined-multiline-${index}`}
                    label={`Deck ${index + 1}`}
                    multiline
                    maxRows={1}
                    value={deck}
                    onChange={handleDeckChange(index)}
                  />
                ))}
              </div>
            ) : (
              ''
            )}
          </Grid>
          <Grid xs={6}>
            {decks.length > 0 && (
              <Box mb={2}>
                <Button variant='contained' onClick={handleGenerateCommonCards}>
                  Generate Common Cards across {numDecks} decks
                </Button>
              </Box>
            )}
            {Object.keys(groupedCommonCards).length > 0 && (
              <TabWithContent
                tabItems={[
                  ...Object.entries(groupedCommonCards)
                    .sort(([aKey], [bKey]) => Number(bKey) - Number(aKey))
                    .map(([deckCount, cards]) => ({
                      name: `${deckCount} ${
                        deckCount === '1' ? 'Occurrence' : 'Occurrences'
                      }`,
                      content: (
                        <div>
                          {cards.map((card, index) => (
                            <div key={index}>{card}</div>
                          ))}
                        </div>
                      ),
                    })),
                  {
                    name: 'All Cards',
                    content: (
                      <div>
                        {Object.entries(cardCounts)
                          .sort(([aCardName, aCount], [bCardName, bCount]) => {
                            if (bCount === aCount)
                              return aCardName.localeCompare(bCardName);
                            return bCount - aCount;
                          })
                          .map(([card, count], index) => (
                            <div key={index}>
                              {count} {card}
                            </div>
                          ))}
                      </div>
                    ),
                  },
                ]}
              />
            )}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default CommonCardsAcrossDecks;
