import React from 'react';
import { View, 
  Text, 
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  Pressable
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.profilePage}>
        <View style={styles.imgView}>
          <Image source={require('./../../assets/images/react-logo.png')}
            style={styles.imgProfile}
          />
          <Text style={styles.imgText}>John Doe</Text>
          <Text style={styles.emailText}>john.doe@example.com</Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>42</Text>
            <Text style={styles.statLabel}>Wins</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Losses</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statNumber}>1250</Text>
            <Text style={styles.statLabel}>Rank</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <Pressable style={styles.menuItem}>
            <Ionicons name="notifications-outline" size={24} color={Colors.PRIMARY} />
            <Text style={styles.menuText}>Notifications</Text>
            <Ionicons name="chevron-forward" size={24} color={Colors.TEXT} />
          </Pressable>
          <Pressable style={styles.menuItem}>
            <Ionicons name="language-outline" size={24} color={Colors.PRIMARY} />
            <Text style={styles.menuText}>Language</Text>
            <Ionicons name="chevron-forward" size={24} color={Colors.TEXT} />
          </Pressable>
          <Pressable style={styles.menuItem}>
            <Ionicons name="volume-high-outline" size={24} color={Colors.PRIMARY} />
            <Text style={styles.menuText}>Sound</Text>
            <Ionicons name="chevron-forward" size={24} color={Colors.TEXT} />
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Wallet</Text>
          <View style={styles.walletBox}>
            <Text style={styles.balanceLabel}>Current Balance</Text>
            <Text style={styles.balanceAmount}>$250.00</Text>
            <Pressable style={styles.topupButton}>
              <Text style={styles.topupButtonText}>Top Up</Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND
  },
  profilePage: {
    flex: 1,
    padding: 20
  },
  imgView: {
    alignItems: 'center',
    marginVertical: 25
  },
  imgProfile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: Colors.PRIMARY
  },
  imgText: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold'
  },
  emailText: {
    fontSize: 16,
    color: Colors.TEXT,
    marginTop: 5
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 30,
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    padding: 20
  },
  statBox: {
    alignItems: 'center'
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.WHITE
  },
  statLabel: {
    fontSize: 14,
    color: Colors.WHITE,
    marginTop: 5
  },
  section: {
    marginBottom: 30
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 10,
    backgroundColor: Colors.WHITE,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: Colors.BORDER,
    shadowColor: Colors.SHADOW,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  menuItemPressed: {
    opacity: 0.8,
    backgroundColor: Colors.BACKGROUND,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 15
  },
  walletBox: {
    backgroundColor: Colors.PRIMARY,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center'
  },
  balanceLabel: {
    fontSize: 16,
    color: Colors.WHITE,
    marginBottom: 10
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.WHITE,
    marginBottom: 20
  },
  topupButton: {
    backgroundColor: Colors.SUCCESS,
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 25
  },
  topupButtonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold'
  }
});