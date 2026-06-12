import { db } from './index.js';
import { organizations } from './schema.js';

async function seed() {
  console.log('Seeding database...');
  try {
    const existingOrg = await db.query.organizations.findFirst();
    if (!existingOrg) {
      await db.insert(organizations).values({
        name: 'Default Organization',
      });
      console.log('Default organization seeded successfully!');
    } else {
      console.log('Default organization already exists.');
    }
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    process.exit(0);
  }
}

seed();
