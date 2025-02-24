import React from 'react';
import SmallRoundedModal, {
  SmallRoundedModalProps,
} from '../smallRoundedModal/SmallRoundedModal';
import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import FilledBtn from '../filledBtn/FilledBtn';
import LockIcon from '../../assets/images/Lock-Icon.svg';
import TextInputWithIcon from '../textInputWithIcon/TextInputWithIcon';
import SearchIcon from '../../assets/images/Search-Icon.svg';

interface JoinGroupModalProps extends SmallRoundedModalProps {
  style?: StyleProp<ViewStyle>;
  visible: boolean;
}

function JoinGroupModal({visible, style, ...rest}: JoinGroupModalProps) {
  return (
    <SmallRoundedModal
      visible={visible}
      accessibilityLabel="Join group modal"
      accessibilityHint="A modal that allows you to join a group"
      {...rest}
      style={[styles.joinGroupModal, style]}>
      <TextInputWithIcon
        placeholder="Group Code"
        accessibilityLabel="Group code text input"
        accessibilityHint="A Text input for group code">
        <SearchIcon
          style={styles.groupCodeInputIcon}
          accessibilityLabel="search icon"
          accessibilityHint="The icon of a magnifying glass"
        />
      </TextInputWithIcon>
      <FilledBtn
        style={styles.askToJoinBtn}
        accessibilityLabel="Ask to join button"
        accessibilityHint="The button to ask to join the group you inserted the code">
        <LockIcon style={styles.askToJoinBtnIcon} />
        <Text style={styles.askToJoinBtnText}>Ask to Join</Text>
      </FilledBtn>
    </SmallRoundedModal>
  );
}

const styles = StyleSheet.create({
  joinGroupModal: {width: 242, paddingHorizontal: 29},
  hide: {display: 'none'},
  groupCodeInputIcon: {width: 27, height: 27},
  askToJoinBtn: {width: 'auto', margin: 'auto'},
  askToJoinBtnText: {fontSize: 14, fontFamily: 'Inter_24pt-Medium'},
  askToJoinBtnIcon: {width: 15, height: 21},
});

export default JoinGroupModal;
