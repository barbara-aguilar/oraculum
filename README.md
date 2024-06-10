# 🔮 Oraculum
Your online Tarot fortune teller

## Description
Oraculum is a online tarot fortune teller, where you choose a card and your luck will be revealed.

Created with Next.Js, React.Js and TypeScript
✨Enjoy 

## Installation

```bash
# Clone the project to your machine
git clone https://github.com/barbara-aguilar/oraculum.git
```

```bash
# To install the dependencies
npm install
```

```bash
# How to run the project local
npm run dev
```
## Online version
https://oraculum-six.vercel.app/


About Oraculum
---------------------------------------------------------------------------

**Layers**

-   **Presentation:**
    -   Next.js
    -   React.js
    -   TypeScript
-   **Data:**
    -   API (Server) (accessed by `useFetchData`)
-   **State:**
    -   Managed internally by the `Deck` and `useDeckState` components with useState React Hook

**Components**

-   **Deck (Main Orchestrator):**
    -   Fetches data from the API using the `useFetchData` hook.
    -   Manages the deck state using the `useDeckState` hook.
    -   Contains functions for:
        -   Starting the game (shuffling and displaying the action button).
        -   Opening the selected card modal.
        -   Closing the selected card modal.
    -   Renders:
        -   `CardGrid`
        -   `DeckMessage`
        -   `Modal` (conditionally)
-   **CardGrid:**
    -   Receives a list of cards from the deck state.
    -   Iterates over the list and renders a `Card` for each card.
    -   Applies styles according to the deck state (cards flipped or not).
    -   Calls the `handleCardClick` function of the `Deck` component when a card is clicked (when cards are flipped).
-   **Card:**
    -   Displays the card's image, name, and description (optional).
    -   Applies styles according to the deck state (card flipped or not).
-   **DeckMessage:**
    -   Displays an instruction message or action button.
    -   Depends on the deck state (cards flipped or not).
    -   Calls the `handleStartDeck` function of the `Deck` component when the button is clicked.
-   **Modal:**
    -   Displays the selected card's image, name, and description.
    -   Receives the selected card as a prop.

**Libraries**

-   Eslint and Prettier (Code and Style Standardization)
-   Vitest (Unit Tests)

**Notes**

-   The `shuffleCards` and `reorderCards` functions are implemented in the Utils folder.

**Possible Improvements**

-   Implement unit tests for all components and functions - Current coverage 3%
-   Implement data caching to improve performance
-   Implement a hook to manage unique daily access
-   Implement Loading component and Error Component
-   Add accessibility
-   Add responsive layout for mobile devices