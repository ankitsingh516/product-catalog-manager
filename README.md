<<<<<<< HEAD
# Product Catalog Manager

## Key Requirements
=======
# Frontend Take-Home Assignment: Product Catalog Manager
## Key Requirements:
>>>>>>> be13123 (Update README.md)

Develop a single-page application that allows users to browse and manage a catalog of products. The application should demonstrate core framework proficiency (React or Angular), state management, and clean component architecture.

## Core Features

1. **Product Listing & Filtering**
<<<<<<< HEAD
   - Fetch product data from a mock API (e.g., JSONPlaceholder or static JSON).
   - Display products in a responsive grid/list layout.
   - Implement client-side filtering by category and sorting by price/rating.
2. **Product Management Interface**
   - Add a form to create new products with validation (e.g., name, price, category).
   - Enable inline editing/deletion of existing products without page reload.
   - Use framework-specific state management (React hooks, Angular services) to synchronize UI with data.
3. **UI/UX Considerations**
   - Ensure mobile responsiveness with at least one breakpoint.
   - Add loading/error states for API interactions.
   - Include hover/focus visual feedback for interactive elements.

## Submission Guidelines

1. Provide a GitHub repository with clear setup/run instructions.
2. Timebox this assessment to 2-4 hours; it doesn't need to be fully completed but it should compile/run without errors.
3. Include a brief write-up explaining key architectural decisions (optional).

### SUBMISSION
## Key Architectural Decisions
1. State Management: Using Angular services for state management to handle complex state interactions and ensure data flow.
2. Component Architecture: Breaking down the application into reusable components to promote modularity and maintainability.
3. Responsive Design: Ensuring the application is mobile-responsive with appropriate breakpoints for different screen sizes.
4. Error Handling: Implementing loading and error states for API interactions to enhance user experience.
5. Animations: Added animations for application title, buttons, dropdowns
6. Added setTimeout for 3 seconds to show loader in product-list page

## Additional Information
1. API Mocking: For the purpose of this assignment, product data is fetched from a mock API located in the assets/products.json file. This can be replaced with a real API endpoint as needed.
2. Testing: Unit tests and end-to-end tests can be added to ensure the reliability and correctness of the application.

## Contact
For any questions or issues, please contact [ankitsingh516@gmail.com].

## Development Server

### Steps

1. **Clone the repository:**

    ```sh
    git clone https://github.com/ankitsingh516/product-catalog-manager.git
    ```

2. **Install Dependencies:**

    ```sh
    npm install
    ```

3. **Start a local development server:**

    ```sh
    ng serve
    ```

4. **Open your browser and navigate to `http://localhost:4200/`:**

    The application will automatically reload whenever you modify any of the source files.

## Project Structure

```plaintext
src/
├── app/
│   ├── modules/
│   │   ├── product/
│   │   │   ├── product-list/
│   │   │   │   ├── product-list.component.html
│   │   │   │   ├── product-list.component.scss
│   │   │   │   ├── product-list.component.ts
│   │   │   ├── manage-product/
│   │   │   │   ├── manage-product.component.html
│   │   │   │   ├── manage-product.component.scss
│   │   │   │   ├── manage-product.component.ts
│   │   │   ├── product.module.ts
│   ├── services/
│   │   ├── product.service.ts
│   ├── shared/
│   │   ├── inline-banner/
│   │   │   ├── inline-banner.component.html
│   │   │   ├── inline-banner.component.scss
│   │   │   ├── inline-banner.component.ts
│   ├── material/
│   │   ├── material.module.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── app.routes.ts
│   ├── app.config.ts
├── assets/
│   ├── products.json
├── index.html
├── main.ts

=======
# product-catalog-manager
=======
   -  Fetch product data from a mock API (e.g., JSONPlaceholder or static JSON).
	 -  Display products in a responsive grid/list layout.
	 -	Implement client-side filtering by category and sorting by price/rating.
3. **Product Management Interface**
	 - Add a form to create new products with validation (e.g., name, price, category).
	 - Enable inline editing/deletion of existing products without page reload.
	 - Use framework-specific state management (React hooks, Angular services) to synchronize UI with data.
4. **UI/UX Considerations**
   - Ensure mobile responsiveness with at least one breakpoint.
	 - Add loading/error states for API interactions.
	 - Include hover/focus visual feedback for interactive elements.

## Submission Guidelines
1. Provide a GitHub repository with clear setup/run instructions
2. Timebox this assesment to 2-4 hours, it doesn't need to be fully completed but it should compile/run without errors
3. Include a brief write-up explaining key architectural decisions (optional)
>>>>>>> be13123 (Update README.md)
