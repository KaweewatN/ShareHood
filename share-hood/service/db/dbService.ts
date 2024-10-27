import {sql} from '@vercel/postgres';

/**
 * Fetch data from a specified table.
 * @param tableName - The name of the table to fetch data from.
 * @returns A promise containing an array of data from the specified table.
 */

export async function QueryAll<T>(query: string): Promise<T[]> {
  if (!query) {
    throw new Error('Missing required parameter: query');
  }
  switch (query) {
    case 'User':
      const users = await sql<T[]>`SELECT * FROM "User"`;
      return users.rows as T[];
    case 'Item':
      const items = await sql<T[]>`SELECT * FROM "Item"`;
      return items.rows as T[];
    case 'Notification':
      const notifications = await sql<T[]>`SELECT * FROM "Notification"`;
      return notifications.rows as T[];
    default:
      throw new Error(`Invalid query: ${query}`);
  }
}
