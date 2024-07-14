import {
    Account,
    Avatars,
    Client,
    Databases,
    ID,
    Query,
} from "react-native-appwrite";

export const config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.aashish.aora",
    projectId: "66926ca0003cdbc16720",
    databaseId: "6692c3af001e054fc473",
    usersCollectionId: "6692c3db0025f8ba2eef",
    videosCollectionId: "6692c4080009c5711e25",
    storageId: "6692c761002047192e0b",
};

// Init your React Native SDK
const client = new Client();
const avatars = new Avatars(client);
const databases = new Databases(client);

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform); // Your application ID or bundle ID.

const account = new Account(client);

// Register User

export const createUser = async (
    email: string,
    password: string,
    username: string
) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );
        console.log("newAccount: ", newAccount);
        if (!newAccount) throw Error;

        //create user avatar from initials of username
        const avatarUrl = avatars.getInitials(username);

        //create a session for the user
        await signIn(email, password);

        const newUser = await databases.createDocument(
            config?.databaseId,
            config.usersCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
};

export async function signIn(email: string, password: string) {
    try {
        const session = await account.createEmailPasswordSession(
            email,
            password
        );
        console.log("session: ", session);
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}

export async function signOut() {
    try {
        await account.deleteSession("current");
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}

export async function getCurrentUser() {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw Error;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.usersCollectionId,
            [Query.equal("accountId", currentAccount.$id)]
        );

        if (!currentUser) throw Error;
        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        throw new Error(error as string);
    }
}
