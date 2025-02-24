import React from 'react';
import {StyleProp, StyleSheet, View, ViewProps, ViewStyle} from 'react-native';
import AddGroupModal from '../AddGroupModal/AddGroupModal';
import JoinGroupModal from '../joinGroupModal/JoinGroupModal';
import AddGroupBtn from '../addGroupBtn/AddGroupBtn';

interface AddGroupProps extends ViewProps {
  style?: StyleProp<ViewStyle>;
}

function AddGroup({style, ...rest}: AddGroupProps) {
  const [addGroupModalVisible, setAddGroupModalVisible] = React.useState(false);
  const [joinGroupModalVisible, setJoinGroupModalVisible] =
    React.useState(false);
  const handleModalsVisibility = () => {
    if (!joinGroupModalVisible) {
      setAddGroupModalVisible(!addGroupModalVisible);
    }
    setJoinGroupModalVisible(false);
  };
  const showJoinGroupModal = () => {
    setJoinGroupModalVisible(true);
    setAddGroupModalVisible(false);
  };
  return (
    <View {...rest} style={[styles.addGroupWrapper, style]}>
      <AddGroupModal
        visible={addGroupModalVisible}
        showJoinGroupModal={showJoinGroupModal}
      />
      <JoinGroupModal visible={joinGroupModalVisible} />
      <AddGroupBtn
        accessibilityLabel="Add Group Button"
        accessibilityHint="Opens the add group modal"
        style={styles.addGroupBtn}
        onPress={handleModalsVisibility}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  addGroupWrapper: {
    display: 'flex',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginBottom: 42,
    zIndex: 10,
  },
  addGroupBtn: {marginTop: 31},
});

export default AddGroup;
