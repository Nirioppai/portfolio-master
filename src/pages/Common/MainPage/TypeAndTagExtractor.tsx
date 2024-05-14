import React, { ChangeEvent, useState } from 'react';

import { Box, Button, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

interface ExtractedEntries {
  [key: string]: string[];
}

interface TagData {
  average: number;
  min: number;
  max: number;
}

function TypeAndTagExtractor() {
  const [numDecks, setNumDecks] = useState<number>(0);
  const [inputValue, setInputValue] = useState<string>('');
  const [decks, setDecks] = useState<string[]>([]);
  const [extractedEntries, setExtractedEntries] = useState<ExtractedEntries>(
    {}
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDeckChange =
    (index: number) => (e: ChangeEvent<HTMLInputElement>) => {
      const newDecks = [...decks];
      newDecks[index] = e.target.value;
      setDecks(newDecks);
    };

  const handleGenerateDecks = () => {
    const decksCount = parseInt(inputValue, 10);
    setNumDecks(decksCount);
    setDecks(new Array(decksCount).fill(''));
    setExtractedEntries({});
  };

  const ignoreEntries = (entry: string) => {
    const lowerCaseEntry = entry.toLowerCase();
    return (
      !lowerCaseEntry.includes('add tokens to wish listtokens') &&
      !lowerCaseEntry.includes('considering')
    );
  };

  const handleExtractEntries = () => {
    const newExtractedEntries: ExtractedEntries = {};
    decks.forEach((deck, index) => {
      const entries = (deck.match(/^.+\(\d+\)/gm) || []).filter(ignoreEntries);

      entries.sort((a, b) => {
        const matchA = a.match(/\((\d+)\)/);
        const matchB = b.match(/\((\d+)\)/);
        const numA = matchA ? parseInt(matchA[1], 10) : 0;
        const numB = matchB ? parseInt(matchB[1], 10) : 0;
        return numB - numA;
      });

      newExtractedEntries[`Deck ${index + 1}`] = entries;
    });
    setExtractedEntries(newExtractedEntries);
  };

  const aggregateTagCounts = (): { [tag: string]: number[] } => {
    const tagCounts: { [tag: string]: number[] } = {};

    Object.values(extractedEntries).forEach((deckEntries) => {
      deckEntries.forEach((entry) => {
        const [tag, countStr] = entry.split('(');
        if (!tag.toLowerCase().includes('untagged')) {
          const count = parseInt(countStr, 10);
          if (!tagCounts[tag]) {
            tagCounts[tag] = [];
          }
          tagCounts[tag].push(count);
        }
      });
    });
    console.log('tagCounts: ', tagCounts);
    return tagCounts;
  };

  const calculateTagData = (): { [tag: string]: TagData } => {
    const tagCounts = aggregateTagCounts();
    const tagData: { [tag: string]: TagData } = {};

    Object.keys(tagCounts).forEach((tag) => {
      const counts = tagCounts[tag];
      const average = counts.reduce((acc, val) => acc + val, 0) / counts.length;
      const min = Math.min(...counts);
      const max = Math.max(...counts);
      tagData[tag] = { average, min, max };
    });

    return tagData;
  };

  return (
    <div>
      <TextField
        id='outlined-number'
        label='Number of Decks'
        placeholder='Number of how many decks to compare'
        type='number'
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={(e: React.KeyboardEvent) => {
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
                Input: Moxfield Type and Tags Visible, no untagged cards left,
                CTRL A CTRL C, CTRL V Here
                {decks.map((deck, index) => (
                  <TextField
                    key={index}
                    id={`outlined-multiline-${index}`}
                    label={`Deck ${index + 1}`}
                    multiline
                    rows={4}
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
                <Button variant='contained' onClick={handleExtractEntries}>
                  Generate Tags across {numDecks} decks
                </Button>
              </Box>
            )}
            {Object.keys(extractedEntries).map((deckName, index) => (
              <div key={index}>
                <h3>{deckName}</h3>
                {extractedEntries[deckName].join(', ')}
              </div>
            ))}

            <div>
              <h2>Average Tag Counts</h2>
              <table>
                <thead>
                  <tr>
                    <th>Tag</th>
                    <th align='right'>Average</th>
                    <th align='right'>Min</th>
                    <th align='right'>Max</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(calculateTagData()).map(([tag, data]) => (
                    <tr key={tag}>
                      <td>{tag}</td>
                      <td align='right'>{data.average.toFixed(2)}</td>
                      <td align='right'>{data.min}</td>
                      <td align='right'>{data.max}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default TypeAndTagExtractor;
