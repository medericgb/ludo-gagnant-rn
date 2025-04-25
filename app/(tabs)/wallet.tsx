import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '@/constants/Colors';
import { Wallet2, ArrowDownCircle, ArrowUpCircle } from 'lucide-react-native';

const FAKE_TRANSACTIONS = [
  { id: 1, type: 'credit', amount: 50, date: '2024-01-15', description: 'Victoire au Ludo' },
  { id: 2, type: 'debit', amount: 20, date: '2024-01-14', description: 'Inscription au tournoi' },
  { id: 3, type: 'credit', amount: 100, date: '2024-01-13', description: 'Bonus quotidien' },
  { id: 4, type: 'debit', amount: 30, date: '2024-01-12', description: 'Achat de jetons' },
  { id: 5, type: 'credit', amount: 75, date: '2024-01-11', description: 'Gain du tournoi' },
  { id: 6, type: 'credit', amount: 25, date: '2024-01-10', description: 'Bonus de parrainage' },
  { id: 7, type: 'debit', amount: 15, date: '2024-01-09', description: 'Participation partie privée' },
  { id: 8, type: 'credit', amount: 200, date: '2024-01-08', description: 'Premier dépôt bonus' },
  { id: 9, type: 'debit', amount: 50, date: '2024-01-07', description: 'Inscription championnat' },
  { id: 10, type: 'credit', amount: 45, date: '2024-01-06', description: 'Gain partie amicale' },
  { id: 11, type: 'credit', amount: 30, date: '2024-01-05', description: 'Bonus hebdomadaire' },
  { id: 12, type: 'debit', amount: 25, date: '2024-01-04', description: 'Pack bonus spécial' },
  { id: 13, type: 'credit', amount: 150, date: '2024-01-03', description: 'Victoire championnat régional' },
  { id: 14, type: 'debit', amount: 10, date: '2024-01-02', description: 'Achat avatar premium' },
  { id: 15, type: 'credit', amount: 60, date: '2024-01-01', description: 'Bonus nouvel an' }
];

export default function WalletScreen() {
  const balance = 275;

  const renderTransaction = (transaction: any) => (
    <View key={transaction.id} style={styles.transactionItem}>
      {transaction.type === 'credit' ? 
        <ArrowDownCircle size={24} color={Colors.SUCCESS} /> :
        <ArrowUpCircle size={24} color={Colors.ERROR} />
      }
      <View style={styles.transactionInfo}>
        <Text style={styles.transactionDescription}>{transaction.description}</Text>
        <Text style={styles.transactionDate}>{transaction.date}</Text>
      </View>
      <Text style={[styles.transactionAmount, 
        { color: transaction.type === 'credit' ? Colors.SUCCESS : Colors.ERROR }]}>
        {transaction.type === 'credit' ? '+' : '-'}€{transaction.amount}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Wallet2 size={32} color={Colors.GOLDEN} />
        <Text style={styles.title}>Mon Portefeuille</Text>
      </View>
      
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Solde actuel</Text>
        <Text style={styles.balanceAmount}>€{balance}</Text>
        <TouchableOpacity>
          <LinearGradient
            colors={[Colors.PRIMARY, Colors.SECONDARY]}
            style={styles.addMoneyButton}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
          >
            <Text style={styles.buttonText}>Ajouter de l'argent</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      <View style={styles.transactionsContainer}>
        <Text style={styles.sectionTitle}>Historique des transactions</Text>
        <ScrollView style={styles.transactionsList}>
          {FAKE_TRANSACTIONS.map(renderTransaction)}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.BORDER,
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
    color: Colors.PRIMARY,
  },
  balanceContainer: {
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f8f9fa',
  },
  balanceLabel: {
    fontSize: 16,
    color: Colors.TEXT,
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.PRIMARY,
    marginBottom: 16,
  },
  addMoneyButton: {
    paddingHorizontal: 50,
    paddingVertical: 16,
    borderRadius: 15,
    borderWidth: 2,
    borderBottomWidth: 5,
    color: Colors.PRIMARY,
    elevation: 3,
  },
  buttonText: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  transactionsContainer: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: Colors.DARK_BLUE,
  },
  transactionsList: {
    flex: 1,
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  transactionInfo: {
    flex: 1,
    marginLeft: 12,
  },
  transactionDescription: {
    fontSize: 16,
    color: Colors.TEXT,
  },
  transactionDate: {
    fontSize: 14,
    color: Colors.TEXT,
    marginTop: 4,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});