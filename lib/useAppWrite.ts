import { Post } from "@/types/types";
import { useEffect, useState } from "react";
interface UseAppWriteReturn {
    data: Post[];
    refetch: () => Promise<void>;
    isLoading: boolean;
    isAlertVisible: boolean;
    errorMessage: string;
    setIsAlertVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const useAppWrite = (fn: () => Promise<any[]>): UseAppWriteReturn => {
    const [data, setData] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isAlertVisible, setIsAlertVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await fn();
            setData(response);
        } catch (error) {
            // Check if error is of type Error
            let errorMessage = "Something went wrong!";
            if (error instanceof Error) {
                errorMessage = error.message.split("AppwriteException:")[1];
            }

            // Display the error message in an alert
            setErrorMessage(errorMessage);
            setIsAlertVisible(true);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const refetch = async () => fetchData();

    return {
        data,
        refetch,
        isLoading,
        isAlertVisible,
        errorMessage,
        setIsAlertVisible,
    };
};

export default useAppWrite;
