### Principles

At the first stage I want to consider the first structure principle which takes an important role in this program. We use type [`BooksParam`](./src/Data/book.tsx#L97) and type [`CatalogMainItem`](./src/Data/book.tsx#L29) as a single contract for objects. This ensures that each book will always have an id, price, and author. If we try to create a book without a price or with the wrong data type, TypeScript will throw an error at compile time.

1. **SRP (Single Responsibility Principle):**
   The file [`book.tsx`](./src/Data/book.tsx) acts as a strictly defined Data Layer. It is responsible only for defining data shapes (Types) and providing initial content. It is completely separate from the React Components, meaning changes to the visual design do not affect the data structure logic.
   The [`calcSalary`](./src/Data/book.tsx#L91) function has a single responsibility: pure mathematical calculation of the discount, without side effects.

2. **DIP (Dependency Inversion Principle):**
   By exporting and using the [`BooksParam`](./src/Data/book.tsx#L97) type, our UI components will depend on this abstraction (interface), not on specific hardcoded objects. This ensures that any object adhering to the [`BooksParam`](./src/Data/book.tsx#L97) contract can be processed by our application seamlessly.

3. **OCP (Open/Closed Principle):**
   We use [`enum CoverType`](./src/Data/book.tsx#L105) to define fixed sets of values. This makes the system "closed" for modification (we don't use random strings) but "open" for extension (we can easily add a `Digital` type to the Enum later without breaking the logic that consumes the Enum).

4. **OCP (Open/Closed Principle):**
    We implement this principle in the [`BlockBook`](./src/Components/BlockBook/BlockBook.tsx) component by using the childrenBaner prop (Composition). The component is "closed" for modification regarding where the banner is placed, but "open" for extension because we can pass any React Node into it from the parent component without changing the BlockBook code.

5. **SRP (Single Responsibility Principle):**
    The [`filterbooks`](./src/Components/ShowPagePopularity/ShowPagePopularity.tsx#L19) function encapsulates the logic for selecting books based on the category. It isolates the "business logic" (filtering rules) from the UI rendering logic. The component [`ShowPagePopularity`](./src/Components/ShowPagePopularity/ShowPagePopularity.tsx) is only responsible for displaying the structure of the slider, while the decision of which data to show is delegated to this separate function.

6. **ISP (Interface Segregation Principle):**
    The [`BanerBookBlock`](./src/Components/BanerBookBlock/BanerBookBlock.tsx) relies on a specific narrow type [`BanerProps`](./src/Components/BanerBookBlock/BanerBookBlock.tsx#L6). Instead of forcing this small component to depend on the entire huge [`BooksParam`](./src/Data/book.tsx#L97) object (which contains price, id, author, etc.), we declare an interface that contains only the data strictly necessary for this component (textBaner).

7. **SRP (Single Responsibility Principle):**
    We adhere to this principle by separating State Management from UI rendering. The file [`CartContext`](./src/Data/CartContext.tsx) (specifically the CartProvider) is responsible only for business logic: calculating the total price (total) and managing the array of books. It contains no UI code. Conversely, the component [`ShowBlockBookKorzyna`](./src/Components/ShowBlockBookKorzyna/ShowBlockBookKorzyna.tsx) is responsible only for displaying the visual representation of a cart item, delegating the logic of "adding" or "removing" back to the Context.

8. **DIP (Dependency Inversion Principle):**
    The [`ShowBlockBookKorzyna`](./src/Components/ShowBlockBookKorzyna/ShowBlockBookKorzyna.tsx) component follows DIP by using the custom hook [`useCart`](./src/Data/CartContext.tsx#L65). The component does not depend on the low-level implementation details (like useState setters or specific logic inside [`removeFromCart`](./src/Data/CartContext.tsx#L42). Instead, it depends on a high-level abstraction (the interface of the Context), simply calling the method [`removeFromCart`](./src/Data/CartContext.tsx#L42)(book.id) without knowing how it works internally.

9. **OCP (Open/Closed Principle):**
    In [`CatalogPanel`](./src/Components/CatalogPanel/CatalogPanel.tsx).tsx, the rendering logic is "closed" for modification but "open" for extension. By using the .[`map`](./src/Components/CatalogPanel/CatalogPanel.tsx#L29)() method to iterate over the catalogs array, we can add new categories to the data source indefinitely without needing to modify the source code of the component itself. The UI automatically extends to accommodate new data.

10. **SRP (Single Responsibility Principle) — Component Composition:**
    The [`Nav`](./src/Components/Nav/Nav.tsx) component acts as a high-level orchestrator (container). It adheres to SRP by delegating the complexity of rendering specific features to child components. Instead of writing the huge markup for the catalog menu inside the navigation bar, it simply renders the [`CatalogPanel`](./src/Components/CatalogPanel/CatalogPanel.tsx) component. Similarly, it delegates the rendering of individual cart items to [`ShowBlockBookKorzyna`](./src/Components/ShowBlockBookKorzyna/ShowBlockBookKorzyna.tsx). This keeps the navigation logic clean and focused on layout and routing.

11. **SRP (Single Responsibility Principle) — Logic Isolation:**
    We use [`useMemo`](./src/Components/Nav/Nav.tsx#L66) to define [`filteredBooks`](./src/Components/Nav/Nav.tsx#L110) . This strictly separates the "business logic" of filtering the data array from the "rendering logic" of the component. The filtering only runs when the query changes, ensuring that other state changes (like opening/closing the cart) do not trigger unnecessary heavy recalculations of the search results.

12. **DIP (Dependency Inversion Principle):**
    The [`Nav`](./src/Components/Nav/Nav.tsx) component displays the [`finalPrice`](./src/Components/Nav/Nav.tsx#L173) but is completely unaware of how this price is calculated. It depends on the abstraction provided by the [`useCart`](./src/Components/Nav/Nav.tsx#L48) hook. If the business logic for calculating the price changes (e.g., adding taxes or global discounts), the [`Nav`](./src/Components/Nav/Nav.tsx) component will not need any changes, as it only consumes the final result.



