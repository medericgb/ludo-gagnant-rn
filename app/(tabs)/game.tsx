import React from 'react';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';

// JavaScript code to block ads
const adBlockerScript = `
(function() {
  const adSelectors = [
    'iframe[src*="doubleclick.net"]',
    'iframe[src*="google-analytics.com"]',
    'iframe[src*="adnxs.com"]',
    'div[class*="ad-"]',
    'div[class*="ads-"]',
    'div[id*="google_ads"]',
    'div[id*="banner"]',
    'ins.adsbygoogle'
  ];

  function blockAds() {
    adSelectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.style.display = 'none';
        element.remove();
      });
    });
  }

  // Run on page load
  blockAds();

  // Create observer to handle dynamically loaded ads
  const observer = new MutationObserver(() => blockAds());
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
})();
`;

export default function Game() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://ludoking.com' }}
      injectedJavaScript={adBlockerScript}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      sharedCookiesEnabled={false}
      thirdPartyCookiesEnabled={false}
      onMessage={() => {}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});