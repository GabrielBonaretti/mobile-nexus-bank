// react
import { Modal } from "react-native";

// react styled
import { ContainerModal, ModalContent } from "./style";

//  components
import ModalOption from "../../Components/ModalOption";

// zustend
import { useAuthStore } from "../../store/authStore";

const MyModal = ({ modalVisible, closeModal }) => {
  const clearTokens = useAuthStore((state) => state.clearTokens);

  const handleExit = () => {
    closeModal();
    clearTokens();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <ContainerModal activeOpacity={1} onPressOut={closeModal}>
        <ModalContent>
          <ModalOption
            imageUrl={require("../../images/user.png")}
            text="My data"
          />
          <ModalOption
            imageUrl={require("../../images/star.png")}
            text="Your benefits"
          />
          <ModalOption
            imageUrl={require("../../images/notification.png")}
            text="Notifications"
          />
          <ModalOption
            imageUrl={require("../../images/verified.png")}
            text="Security"
          />
          <ModalOption
            imageUrl={require("../../images/menu.png")}
            text="All services"
          />
          <ModalOption
            imageUrl={require("../../images/logout.png")}
            text="Exit the app"
            logOut={true}
            onPress={(e) => handleExit()}
          />
        </ModalContent>
      </ContainerModal>
    </Modal>
  );
};

export default MyModal;
