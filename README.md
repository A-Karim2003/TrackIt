# Learning Tracker

A React based study organisation application designed to help learners manage their subjects, track tasks, and monitor overall progress through an intuitive dashboard interface.

## Features

### Core Functionality

- **Subject Management**: Create, edit, and delete subjects with randomly assigned color themes
- **Task Organisation**: Add tasks to specific subjects and mark them as complete
- **Progress Tracking**: Visual progress bars showing completion percentage for each subject
- **Dashboard Analytics**:
  - Total number of subjects
  - Completed tasks vs total tasks
  - Overall progress percentage
  - Subject overview with individual progress

### User Experience

- **Responsive Design**: Built with Tailwind CSS for a mobile-friendly experience
- **Toast Notifications**: Real-time feedback for all actions (create, update, delete)
- **Loading States**: Smooth loading indicators during data fetches
- **Navigation**: Easy navigation between Dashboard, Subjects list, and individual Subject details

## Tech Stack

### Frontend

- **React 19** - UI library with latest features
- **React Router DOM 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Icons** - Icon library for UI elements
- **React Toastify** - Toast notification system

### Backend (Development)

- **JSON Server** - Mock REST API for development

## Getting Started

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/A-Karim2003/TrackIt.git
cd trackit
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up the database**
   Create a `data/db.json` file in the root directory with the following structure:

```json
{
  "subjects": []
}
```

### Running the Application

You need to run both the development server and the JSON server simultaneously:

**Option 1: Using two terminal windows**

Terminal 1 - Start the React app:

```bash
npm run dev
```

Terminal 2 - Start the mock API server:

```bash
npm run server
```

**Option 2: Using a process manager (recommended)**

You can use a tool like `concurrently` to run both servers with one command.

### Accessing the Application

- **Frontend**: http://localhost:5173 (or the port shown in your terminal)
- **API Server**: http://localhost:9000
- **API Endpoints**: http://localhost:9000/subjects

## 🔌 API Endpoints

The application uses JSON Server as a mock backend with the following endpoints:

### Subjects

- `GET /subjects` - Fetch all subjects
- `POST /subjects` - Create a new subject
- `GET /subjects/:id` - Fetch a single subject
- `PATCH /subjects/:id` - Update a subject
- `DELETE /subjects/:id` - Delete a subject

### Data Structure

**Subject Object:**

```json
{
  "id": "uuid-string",
  "name": "Mathematics",
  "themeColor": "#44C1B3",
  "tasks": [
    {
      "id": "uuid-string",
      "text": "Complete algebra homework",
      "completed": false
    }
  ]
}
```

## 📸 Screenshots

### Dashboard View

![Dashboard](/public//dashboard.png)
_Overview of some subjects with statistics and progress tracking_

### Subjects Page

![Subjects List](/public//subjects.png)
_Manage all your subjects in one place_

### Subject Detail View

![Subject Detail](/public/tasks.png)
_View and manage tasks for individual subjects_
