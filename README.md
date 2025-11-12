
# Networking Protocol Explorer

An interactive, modern web application designed to help users explore and understand various computer networking protocols. This project, created by Harsh Srivastav, serves as a visual and educational tool for students, developers, and anyone curious about the building blocks of the internet.

![Networking Protocol Explorer Screenshot](https://i.imgur.com/example.png) 
*(Note: Screenshot is a placeholder)*

## ✨ Features

- **Interactive Protocol Cards**: Browse protocols with smooth hover effects and expandable snippets for quick insights.
- **Detailed Modal Views**: Click on any protocol to open a detailed view with a full description, key characteristics, and an animated visual diagram.
- **Animated SVG Diagrams**: Custom-built, animated diagrams for each protocol to visually explain concepts like TCP's three-way handshake, UDP's connectionless nature, and more.
- **Powerful Search**: Instantly filter protocols by name, full name, or description.
- **Category Filtering**: Easily sort protocols by their layer (Transport, Application, Network).
- **Side-by-Side Comparison**: An intuitive comparison mode to analyze two protocols against each other based on key metrics like reliability, speed, and connection type.
- **Responsive Design**: A fully responsive and mobile-friendly interface for a seamless experience on any device.
- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS for a performant and maintainable application.

## 📚 Protocols Covered

The explorer currently includes detailed information and diagrams for the following protocols:

- **TCP** (Transmission Control Protocol)
- **UDP** (User Datagram Protocol)
- **IP** (Internet Protocol)
- **HTTP** (Hypertext Transfer Protocol)
- **HTTPS** (Hypertext Transfer Protocol Secure)
- **DNS** (Domain Name System)
- **FTP** (File Transfer Protocol)
- **SMTP** (Simple Mail Transfer Protocol)

## 🛠️ Technologies Used

- **Frontend**: [React](https://reactjs.org/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: CSS Animations & Transitions

## 🚀 How to Use

1.  **Browse**: Scroll through the grid of protocol cards. Hover over a card to see a tooltip with more information.
2.  **Expand**: Click a card once to expand it and see a brief description snippet.
3.  **View Details**: Click the "View Details" button or click an already expanded card to open the modal with in-depth information and the animated diagram.
4.  **Search**: Use the search bar at the top to find a specific protocol.
5.  **Filter**: Click the category buttons (`All`, `Transport`, etc.) to filter the list.
6.  **Compare**: Click the "Compare Protocols" button to switch to comparison mode. Select two protocols from the dropdowns to see a side-by-side analysis.

## 📂 Project Structure

```
/
├── components/
│   ├── diagrams/         # Animated SVG diagrams for each protocol
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── ProtocolCard.tsx
│   ├── ProtocolComparison.tsx
│   └── ProtocolDetailsModal.tsx
├── constants.ts          # Centralized data for all protocols
├── types.ts              # TypeScript type definitions
├── App.tsx               # Main application component
├── index.html            # Entry HTML file
└── index.tsx             # React application entry point
```

## 📝 Credits

This project was designed and developed as a computer networking project by **Harsh Srivastav** & **Anupam Bhargav**.

---

This README provides a comprehensive overview of the Networking Protocol Explorer application.
