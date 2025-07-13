# Environment and Changing Climate Conference Website

A modern, responsive website for the "Environment and Changing Climate: Global Strategies and Local Actions" conference at Independent University, Bangladesh.

## Features

- 🌍 Beautiful environmental-themed design
- 📱 Fully responsive layout
- 🎠 Interactive events carousel
- 📅 Conference timeline page
- 🎨 Modern UI with glass morphism effects
- ⚡ Fast performance with Vite
- 🐳 Docker support for easy deployment

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Docker + Nginx

## Quick Start

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### Docker Deployment

#### Option 1: Using Docker Compose (Recommended)

```bash
# Build and run the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

#### Option 2: Using Docker directly

```bash
# Build the image
docker build -t climate-conference-website .

# Run the container
docker run -d -p 3000:80 --name climate-conference-app climate-conference-website

# Stop the container
docker stop climate-conference-app
docker rm climate-conference-app
```

## Access the Website

After running with Docker, visit: http://localhost:3000

## Conference Information

- **Date**: November 20-21, 2024 (Thursday & Friday)
- **Location**: Independent University, Bangladesh (IUB)
- **Mode**: Hybrid (Offline for local, Online for international participants)
- **Registration**: ৳1,000 (Non-students), ৳500 (Students), Free (IUB Students)

## Project Structure

```
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose configuration
├── nginx.conf           # Nginx configuration
└── package.json         # Dependencies and scripts
```

## Docker Configuration

The application uses a multi-stage Docker build:

1. **Build Stage**: Uses Node.js 18 Alpine to build the React application
2. **Production Stage**: Uses Nginx Alpine to serve the static files

### Features of the Docker Setup:

- ✅ Multi-stage build for optimized image size
- ✅ Nginx for efficient static file serving
- ✅ Gzip compression enabled
- ✅ Static asset caching
- ✅ SPA routing support
- ✅ Production-ready configuration

## Environment Variables

No environment variables are required for basic functionality.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with Docker
5. Submit a pull request

## License

This project is licensed under the MIT License.