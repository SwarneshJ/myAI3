import { UIMessage } from "ai";
import { Response } from "@/components/ai-elements/response";

export function UserMessage({ message }: { message: UIMessage }) {
    return (
        <div className="whitespace-pre-wrap w-full flex justify-end">
            {/* UPDATED STYLING HERE: */}
            <div className="max-w-lg w-fit px-5 py-3 rounded-[20px] rounded-tr-sm bg-[#007c7c] text-white shadow-sm">
                <div className="text-sm">
                    {message.parts.map((part, i) => {
                        switch (part.type) {
                            case "text":
                                return <Response key={`${message.id}-${i}`}>{part.text}</Response>;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
