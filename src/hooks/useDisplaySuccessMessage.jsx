import { useState } from "react";

export const useDisplaySuccessMessage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const displaySuccessMessage = () => {
        setIsSubmitted(true);
        setTimeout(() => {
        setIsSubmitted(false);
        }, 3000);
    };

    return {isSubmitted, displaySuccessMessage}
}
