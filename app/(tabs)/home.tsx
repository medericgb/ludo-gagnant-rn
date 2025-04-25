import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from 'react-native';
import Colors from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { 
  CircleUserRound, 
  Trophy, 
  DollarSign, 
  GamepadIcon, 
  Percent,
  Medal
} from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();

  // Exemple de statistiques - à remplacer par les données réelles
  const stats = {
    partiesPlayed: 57,
    partiesWon: 42,
    winRate: '73.7%',
    rank: '#1250',
    moneyWon: 250,
    currentStreak: 3,
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable 
          style={({ pressed }) => [
            styles.profileButton,
            pressed && styles.buttonPressed
          ]}
          onPress={() => router.push("/profile")}
        >
          <CircleUserRound size={32} color={Colors.PRIMARY} />
        </Pressable>
      </View>

      <View style={styles.content}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.appNameText}>Ludo Gagnant</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <GamepadIcon size={28} color={Colors.PRIMARY} />
              <Text style={styles.statValue}>{stats.partiesPlayed}</Text>
              <Text style={styles.statLabel}>Total Parties</Text>
            </View>

            <View style={styles.statCard}>
              <Trophy size={28} color={Colors.PRIMARY} />
              <Text style={styles.statValue}>{stats.partiesWon}</Text>
              <Text style={styles.statLabel}>Victoires</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statCard}>
              <Percent size={28} color={Colors.PRIMARY} />
              <Text style={styles.statValue}>{stats.winRate}</Text>
              <Text style={styles.statLabel}>% Victoires</Text>
            </View>

            <View style={styles.statCard}>
              <Medal size={28} color={Colors.PRIMARY} />
              <Text style={styles.statValue}>{stats.rank}</Text>
              <Text style={styles.statLabel}>Classement</Text>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={[styles.statCard, styles.fullWidthCard]}>
              {/* <DollarSign size={28} color={Colors.PRIMARY} /> */}
              <Text style={styles.statValue}>${stats.moneyWon}</Text>
              <Text style={styles.statLabel}>Gains Totaux</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.newPartyButton}>
        <Pressable
          style={({ pressed }) => [
            styles.newButton,
            pressed && styles.buttonPressed
          ]}
          onPress={() => router.push("/game")}
        >
          <Text style={styles.newPartyText}>
            Nouvelle partie
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  profileButton: {
    padding: 8,
    borderRadius: 15,
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.WHITE,
    shadowColor: Colors.PRIMARY,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 20,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 20,
    color: Colors.TEXT,
    marginBottom: 5,
  },
  appNameText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
  },
  statsContainer: {
    width: '100%',
    paddingHorizontal: 20,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  statCard: {
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    width: '48%',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: Colors.PRIMARY,
    shadowColor: Colors.SHADOW,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  fullWidthCard: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    marginTop: 8,
  },
  statLabel: {
    fontSize: 12,
    color: Colors.TEXT,
    textAlign: 'center',
    marginTop: 4,
  },
  newPartyButton: {
    paddingHorizontal: 20,
    paddingBottom: 35,
  },
  newButton: {
    backgroundColor: Colors.PRIMARY,
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    borderWidth: 2,
    borderBottomWidth: 4,
    borderColor: Colors.SECONDARY,
  },
  buttonPressed: {
    opacity: 0.8,
    backgroundColor: Colors.SUCCESS,
  },
  newPartyText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.WHITE,
    textAlign: 'center',
  },
});