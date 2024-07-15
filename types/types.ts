export interface GlobalContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (loggedIn: boolean) => void;
    user: any | null;
    setUser: (user: any | null) => void;
    isLoading: boolean;
}

export interface Creator {
    $collectionId: string;
    $createdAt: string;
    $databaseId: string;
    $id: string;
    $permissions: any[];
    $tenant: string;
    $updatedAt: string;
    accountId: string;
    avatar: string;
    email: string;
    username: string;
}

export interface Post {
    $collectionId: string;
    $createdAt: string;
    $databaseId: string;
    $id: string;
    $permissions: any[];
    $tenant: string;
    $updatedAt: string;
    creator: Creator;
    prompt: string;
    thumbnail: string;
    title: string;
    video: string;
}
