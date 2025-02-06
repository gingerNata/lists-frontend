if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('NEXT_PUBLIC_API_URL environment variable is not set');
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
