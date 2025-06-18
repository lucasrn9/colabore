import React from 'react';
import {
  ImageSourcePropType,
  ScrollView,
  ScrollViewProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import GroupPreview from '../groupPreview/GroupPreview';

interface Group {
  name: string;
  lastActivity: string;
  lastActivityDate: string;
  photo: ImageSourcePropType | undefined;
}

interface GroupsViewProps extends ScrollViewProps {
  groups: Group[];
  style?: StyleProp<ViewStyle>;
}

const GroupsView = ({groups, style, ...rest}: GroupsViewProps) => {
  const hasGroups = groups.length > 0;
  const groupsElements = groups.map(group => (
    <GroupPreview
      groupName={group.name}
      activity={group.lastActivity}
      date={group.lastActivityDate}
      photo={group.photo}
      accessibilityLabel="Group Preview"
      accessibilityHint={`Open the group ${group.name}`}
    />
  ));
  return (
    <ScrollView
      {...rest}
      contentContainerStyle={[styles.scrollView, style]}
      accessibilityLabel="A list of all your groups">
      {hasGroups ? groupsElements : null}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {gap: 5},
});

export default GroupsView;
