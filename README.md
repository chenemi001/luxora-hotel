# LUXORA — Luxury Hotel Experience

> A modern, immersive luxury hotel experience built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

LUXORA is a responsive hotel landing page designed to combine premium visual design with practical frontend engineering.

The project focuses on reusable components, responsive layouts, smooth interactions, accessible forms, client-side validation, and maintainable React architecture.

---

## ✨ Live Demo

**Live Website:** [Add your Vercel URL here]

**Repository:** [https://github.com/chenemi001/luxora-hotel](https://github.com/chenemi001/luxora-hotel)

---

## 🎯 Project Goals

The goal of LUXORA was not only to create an attractive hotel website, but to use the project to practice the skills expected from a modern frontend engineer.

The project demonstrates:

- Component-based architecture
- Reusable React components
- TypeScript
- Responsive UI development
- Form state management
- Client-side validation
- Error and loading states
- Accessible interactions
- Framer Motion animations
- Data-driven rendering
- Git and GitHub workflow
- Production builds
- Vercel deployment

---

## 🖥️ Features

### Immersive Hero

- Full-screen visual experience
- Luxury-focused typography
- Responsive layout
- Framer Motion entrance animations
- Clear call-to-action

### About

- Editorial-style layout
- Responsive image and content arrangement
- Scroll-based animation
- Strong visual hierarchy

### Rooms & Suites

- Reusable `RoomCard` component
- Data-driven rendering
- Room descriptions and pricing
- Interactive image hover effects
- Responsive grid

### Amenities

Includes:

- Wellness & Spa
- Signature Dining
- Fitness Studio
- Private Events

Features staggered animations and interactive hover states.

### Gallery

- Responsive CSS Grid
- Editorial image composition
- Image hover effects
- Scroll animations
- Responsive image arrangement

### Dining

- Featured restaurant experience
- Editorial two-column layout
- Animated content reveal
- Dining options

### Testimonials

- Interactive testimonial carousel
- Automatic rotation
- Previous/Next controls
- Animated transitions
- React state management
- `useEffect` cleanup

### Booking

The booking form includes:

- Controlled inputs
- Date selection
- Guest selection
- Room selection
- Client-side validation
- Loading state
- Error state
- Success state
- Accessible form labels
- ARIA attributes

---

# 🧱 Architecture

The application uses a component-based architecture where individual sections are isolated into reusable components.

```text
app/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── Navbar.tsx
├── Hero.tsx
├── About.tsx
├── RoomCard.tsx
├── Rooms.tsx
├── Amenities.tsx
├── Gallery.tsx
├── Dining.tsx
├── Testimonials.tsx
├── Booking.tsx
└── Footer.tsx

public/
├── images/
└── videos/
