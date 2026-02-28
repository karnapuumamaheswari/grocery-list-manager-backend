# Grocery List Manager - Backend

## Project Overview
Node.js + Express backend API for the Smart Grocery List Manager. It handles secure CRUD operations for grocery items, pantry inventory, purchase history, product catalog, and monthly analytics using Supabase.

## Tech Stack
- Node.js
- Express.js
- Supabase (Postgres + Auth)

## API Documentation
Base URL:
- `https://grocery-list-manager-backend-fhhh.onrender.com`

Health:
- `GET /health`

Authenticated routes (Bearer token required):
- `GET /api/grocery-items`
- `POST /api/grocery-items`
- `PATCH /api/grocery-items/:id`
- `DELETE /api/grocery-items/:id`
- `POST /api/grocery-items/finalize`
- `GET /api/pantry`
- `POST /api/pantry`
- `PATCH /api/pantry/:id`
- `DELETE /api/pantry/:id`
- `GET /api/purchase-history`
- `GET /api/analytics/monthly-summary`
- `GET /api/products`

## Database Schema Explanation
Schema file:
- `supabase/schema.sql`

Main tables:
- `grocery_items`: user-wise grocery list items (`user_id`, `name`, `category`, `quantity`, `price`)
- `pantry`: user pantry inventory (`user_id`, `item_name`, `quantity`, `expiry_date`)
- `purchase_history`: finalized purchase records (`user_id`, `total_amount`, `purchase_date`, `items_snapshot`)
- `products`: product catalog for suggestions (`name`, `category`, `price`, `store`, `brand`)

Data security:
- Supabase Row Level Security policies are used
- API validates user via Bearer token and filters by `user_id`

## Installation Steps
1. Install dependencies:
```bash
npm install
```
2. Create `.env` and set:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `FRONTEND_ORIGIN`
- `PORT=4000`
3. Run locally:
```bash
npm run server
```

## Deployment Link
- Render Backend: `https://grocery-list-manager-backend-fhhh.onrender.com`
- Health Check: `https://grocery-list-manager-backend-fhhh.onrender.com/health`

