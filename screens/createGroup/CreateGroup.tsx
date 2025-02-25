import React from 'react';
import {StyleSheet, View} from 'react-native';
import Header from '../../components/header/Header';
import AddPhoto from '../../components/addPhoto/AddPhoto';
import FormTextInput from '../../components/formTextInput/FormTextInput';
import SolidButton from '../../components/solidButton/SolidButton';

function CreateGroup() {
  return (
    <View>
      <Header />
      <View style={styles.createGroupForm}>
        <AddPhoto style={styles.addPhoto} />
        <FormTextInput
          placeholder="Group Name"
          accessibilityLabel="Group name field"
          accessibilityHint="Enter the group name"
        />
        <FormTextInput
          placeholder="Group Participants"
          accessibilityLabel="Group participants field"
          accessibilityHint="Enter the group participants"
          textAlignVertical="top"
          multiline
          style={styles.participantsInput}
        />
        <FormTextInput
          placeholder="Group Description"
          accessibilityLabel="Group participants field"
          accessibilityHint="Enter the group description"
          textAlignVertical="top"
          multiline
          style={styles.descriptionInput}
        />
        <SolidButton text="Create Group" style={styles.button} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  createGroupForm: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingHorizontal: 44,
    marginTop: 34,
    gap: 16,
  },
  addPhoto: {
    marginBottom: 18,
  },
  participantsInput: {
    height: 66,
  },
  descriptionInput: {height: 190},
  button: {marginTop: 52},
});

export default CreateGroup;
