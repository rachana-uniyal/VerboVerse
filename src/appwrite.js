import { Account, Client } from "appwrite";

console.log(process.env.REACT_APP_API_END_POINT);
const client = new Client()
  .setEndpoint(process.env.REACT_APP_API_END_POINT)
  .setProject(process.env.REACT_APP_PROJECT_ID);

export const getUserData = async () => {
  try {
    const account = new Account(client);
    return account.get();
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export const signin = async (email, password) => {
  try {
    const account = new Account(client);
    return account.createEmailSession(email, password);
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export const logout = async () => {
  try {
    const account = new Account(client);
    return account.deleteSession("current");
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export const signup = async (email, password, username) => {
  try {
    const account = new Account(client);
    return account.create("unique()", email, password, username);
  } catch (error) {
    const appwriteError = error;
    throw new Error(appwriteError.message);
  }
};

export default client;
