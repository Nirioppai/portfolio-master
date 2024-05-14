import React, { ChangeEvent, useState } from 'react';

import { Box, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

interface CardPrices {
  [key: string]: number;
}

function PriceSorter() {
  const [inputValue, setInputValue] = useState<string>('');
  const [decks, setDecks] = useState<string[]>([]);
  const [cardPrices, setCardPrices] = useState<CardPrices>({});

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeckChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newDecks = [...decks];
      newDecks[index] = e.target.value;

      const newCardPrices = { ...cardPrices };
      const deckCards = e.target.value
        .split('\n')
        .filter((line) => line.trim() !== '');
      deckCards.forEach((card) => {
        const match = card.match(/(\d+)\s+(.+?)\s+\$\s+([\d.]+)/);
        if (match) {
          const [, , name, price] = match;
          newCardPrices[name] = parseFloat(price);
        }
      });

      setDecks(newDecks);
      setCardPrices(newCardPrices);
    };

  const handleGenerateDecks = () => {
    const decksCount = parseInt(inputValue, 10);
    setDecks(new Array(decksCount).fill(''));
  };

  const sortedCardsByPrice = Object.entries(cardPrices).sort(
    (a, b) => b[1] - a[1]
  );

  return (
    <div>
      <TextField
        id='outlined-number'
        label='Number of Decks'
        placeholder='Number of how many decks to compare'
        type='number'
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={(e: React.KeyboardEvent<HTMLDivElement>) => {
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
                Input: MTG Goldfish Price Results screem: CTRL A CTRL C, and
                CTRL V here
                {decks.map((deck, index) => (
                  <TextField
                    key={index}
                    id={`outlined-multiline-${index}`}
                    label={`Deck ${index + 1}`}
                    multiline
                    maxRows={4}
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
            <div>
              <h3>Card Prices (Highest to Lowest)</h3>
              {sortedCardsByPrice.map(([card, price], index) => (
                <div key={index}>
                  {card}: ${price.toFixed(2)}
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default PriceSorter;
