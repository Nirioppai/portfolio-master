import React from 'react';

import { TabWithContent } from '../TabWithContent';

interface DeckListTabsProps {
  deckList: string[];
}

const DeckListTabs: React.FC<DeckListTabsProps> = ({ deckList }) => {
  // Process deckList to get groupedCommonCards and cardCounts
  const cardOccurrences: { [key: string]: number } = {};
  const localCardCounts: { [key: string]: number } = {};
  const groupedCommonCards: { [key: string]: string[] } = {};

  deckList.forEach((deck) => {
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
    if (!groupedCommonCards[occurrenceCount]) {
      groupedCommonCards[occurrenceCount] = [];
    }
    groupedCommonCards[occurrenceCount].push(
      `${localCardCounts[name]} ${name}`
    );
  });

  // Prepare tab items
  const tabItems = Object.entries(groupedCommonCards)
    .sort(([aKey], [bKey]) => Number(bKey) - Number(aKey))
    .map(([deckCount, cards]) => ({
      name: `${deckCount} ${deckCount === '1' ? 'Occurrence' : 'Occurrences'}`,
      content: (
        <div>
          {cards.map((card, index) => (
            <div key={index}>{card}</div>
          ))}
        </div>
      ),
    }));

  tabItems.push({
    name: 'All Cards',
    content: (
      <div>
        {Object.entries(localCardCounts)
          .sort(([aCardName, aCount], [bCardName, bCount]) => {
            if (bCount === aCount) return aCardName.localeCompare(bCardName);
            return bCount - aCount;
          })
          .map(([card, count], index) => (
            <div key={index}>
              {count} {card}
            </div>
          ))}
      </div>
    ),
  });

  return <TabWithContent tabItems={tabItems} />;
};

export default DeckListTabs;
