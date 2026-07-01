import React, { useRef } from "react";
import { FiSend } from "react-icons/fi"; // Feather Send icon

interface InputBarProps {
  currentMessage: string;
  setCurrentMessage: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputBar: React.FC<InputBarProps> = ({
  currentMessage,
  setCurrentMessage,
  onSubmit,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      formRef.current?.requestSubmit();
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="w-full border-t border-gray-200 bg-white px-3 py-3 sm:px-6 sm:py-4"
    >
      <div className="max-w-5xl mx-auto flex items-end gap-2 sm:gap-3">
        <textarea
          rows={2}
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask your sales assistant..."
          className="flex-grow resize-none rounded-lg border border-gray-300 bg-gray-50 px-3 py-2.5 sm:px-5 sm:py-3 text-sm sm:text-base text-gray-800 shadow-sm focus:border-[#4A3F71] focus:ring-2 focus:ring-[#4A3F71] focus:outline-none"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="shrink-0 rounded-full bg-[#4A3F71] p-2.5 sm:p-3 text-white shadow-md hover:bg-[#3B325E] focus:outline-none focus:ring-2 focus:ring-[#4A3F71]"
        >
          <FiSend className="w-5 h-5 sm:w-6 sm:h-6" color="#fff" />
        </button>
      </div>
    </form>
  );
};

export default InputBar;
