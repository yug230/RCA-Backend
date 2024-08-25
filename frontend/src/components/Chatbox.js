import { Box } from "@chakra-ui/layout";
import "./styles.css";
import SingleChat from "./SingleChat";
import { ChatState } from "../Context/ChatProvider";

const Chatbox = ({ fetchAgain, setFetchAgain }) => {
  const { selectedChat } = ChatState();

  return (
    <Box
      style={{
        display: selectedChat ? "flex" : "none",
        alignItems: "center",
        flexDirection: "column",
        padding: "16px", // Chakra UI automatically converts spacing props like 'p={3}' to their pixel equivalents
        backgroundColor: "white",
        width: selectedChat ? "100%" : "68%",
        borderRadius: "8px", // The 'lg' border radius in Chakra UI typically translates to '8px'
        borderWidth: "1px",
      }}
    >
      <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
    </Box>
  );
};

export default Chatbox;
