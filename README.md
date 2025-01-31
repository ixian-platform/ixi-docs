# IXI-DOCS

**Ixi Docs** are the official documentation for the Ixian network. The documentation is built using [Next.js](https://nextjs.org/) and documentation starter kit [rubix-documents](https://github.com/rubixvi/rubix-documents) which is a free, open-source documentation template.

### Development

1. Clone the repository:

   ```bash
   git clone git@github.com:ProjectIxian/ixi-docs.git
   cd ixi-docs
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the project.

5. **For Production:**

   - Build the app:

     ```bash
     npm run build
     ```

   - Start the production server:

     ```bash
     npm run start
     ```

   - Open [http://localhost:3000](http://localhost:3000) to view the production build.

   - **If deploying to Vercel,** the build step is automatically handled during deployment.


# ixidocs

**ixidocs** is the official documentation website for the **Ixian Network**. It is built using **[Next.js](https://nextjs.org/)** and the open-source documentation starter kit **[rubix-documents](https://github.com/rubixvi/rubix-documents)**.

## Getting Started

To start development:

1. Clone the repository:
   ```sh
   git clone git@github.com:ProjectIxian/ixi-docs.git
   ```
2. Navigate into the project directory:
   ```sh
   cd ixi-docs
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Building the Project

To build the project for production, run:
1. Build the app:

    ```bash
     npm run build
     ```

2. Start the production server:

    ```bash
      npm run start
      ```

## Configuration

### Website Settings
Website settings can be modified in:
```
/settings/settings.ts
```

### Navigation
The navbar navigation can be customized by editing:
```
/settings/navigation.tsx
```

## Managing Documentation

### Adding or Editing Documentation
1. Update the documentation structure by modifying:
   ```
   /settings/documents.ts
   ```
2. Add or edit corresponding `.mdx` files in:
   ```
   /contents/docs/
   ```

### Updating Search Data
To regenerate search data after modifying the documentation, run:
```bash
  npm run generate-content-json
  ```

This will update the search data in:
```
/public/search-data/documents.json
```

## License
This project is open-source and follows the **[rubix-documents](https://github.com/rubixvi/rubix-documents)** license. See the full license in:
```
/LICENSE
```

## Documentation Reference
For further details, refer to the official **Next.js** documentation v15+ using App Router: [Next.js Documentation](https://nextjs.org/docs).

