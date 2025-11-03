import { Tabs } from 'expo-router';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'below-icon',
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'explore',
          tabBarIconStyle: { display: 'none' },
          tabBarLabelPosition: 'below-icon',
        }}
      />
    </Tabs>
  );
}
