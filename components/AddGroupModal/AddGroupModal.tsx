import React from 'react';
import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import SmallRoundedModal, {
  SmallRoundedModalProps,
} from '../smallRoundedModal/SmallRoundedModal';
import ModalActionBtn from '../modalActionBtn/ModalActionBtn';
import PlusIconCircle from '../../assets/images/Plus-Icon-Circle.svg';
import SearchIcon from '../../assets/images/Search-Icon.svg';

interface AddGroupModalProps extends SmallRoundedModalProps {
  visible: boolean;
  showJoinGroupModal?: () => void;
  style?: StyleProp<ViewStyle>;
}

function AddGroupModal({
  visible,
  showJoinGroupModal,
  style,
  ...rest
}: AddGroupModalProps) {
  return (
    <SmallRoundedModal
      visible={visible}
      accessibilityLabel="Add group modal"
      accessibilityHint="A modal that show options to create or to join a group"
      {...rest}
      style={[styles.addGroupModal, style]}>
      <ModalActionBtn
        accessibilityLabel="Create Group Button"
        accessibilityHint="A button that displays the group creation screen">
        <PlusIconCircle style={styles.createGroupBtnIcon} />
        <Text style={styles.createGroupBtnText}>Create Group</Text>
      </ModalActionBtn>
      <ModalActionBtn
        onPress={showJoinGroupModal}
        accessibilityLabel="Join group button"
        accessibilityHint="A button that displays the join group modal">
        <SearchIcon style={styles.joinGroupBtnIcon} />
        <Text style={styles.joinGroupBtnText}>Join Group</Text>
      </ModalActionBtn>
    </SmallRoundedModal>
  );
}

const styles = StyleSheet.create({
  addGroupModal: {
    width: 267,
  },
  createGroupBtnText: {
    fontFamily: 'Inter_24pt-Black',
    fontSize: 20,
    color: '#ffffff',
  },
  createGroupBtnIcon: {
    width: 30,
    height: 28,
  },
  joinGroupBtnText: {
    fontFamily: 'Inter_24pt-Medium',
    fontSize: 20,
    color: '#ffffff',
  },
  joinGroupBtnIcon: {
    width: 28,
    height: 27,
  },
});

export default AddGroupModal;
