import { useState } from "react";

export const useDisplaySuccessMessage = () => {
    const [isSubmited, setIsSubmited] = useState(false);

    const displaySuccessMessage = () => {
        setIsSubmited(true);
        setTimeout(() => {
        setIsSubmited(false);
        }, 3000);
    };

    return {isSubmited, displaySuccessMessage}
}
