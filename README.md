# Ship It Quick ⚡️

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository.
2. Install the dependencies using `npm install` or `yarn install`.
3. Run the development server using `npm run dev` or `yarn dev`.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Folder Structure

The project follows a structured folder organization to maintain code clarity and separation of concerns. Below is an overview of the main folders and their purposes:

### app/(main)

This folder contains the main application logic and components. It serves as the entry point for the application.

### app/api

This folder contains API route handlers. Each file in this directory corresponds to an API endpoint.

### app/auth

This folder handles authentication-related logic, including login, registration, and user session management.

### app/dashboard

This folder contains components and logic related to the dashboard, which is a protected route. Only authenticated users can access this section.

### components/ui

This folder contains reusable UI components that can be used throughout the application. These components are designed to be generic and flexible.

### components/emails

This folder contains email templates used for sending emails from the application. For example:

- `email-template.tsx`: A template for formatting and sending emails.

## Additional Information

- **Next.js**: This project is built using Next.js, a React framework that enables server-side rendering and static site generation.
- **TypeScript**: The project uses TypeScript for type safety and improved developer experience.
- **Styling**: The project uses CSS modules for styling components.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

Incremental counter
https://github.com/chronark/chronark.com/blob/main/pages/api/incr.ts
