import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { LinearGradient as ExpoLinearGradient } from 'expo-linear-gradient';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function ChatScreen() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '你好！我是 AI 聊天助手。有什么我可以帮助你的吗？',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const API_KEY = 'sk-c3gs45vbc6ha1qs0akck494k9eerv7snmtydzbx6l0zkbf2w';

  const sendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('https://api.xiaomimimo.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: 'mimo-v2.5',
          messages: [{ role: 'user', content: inputText }],
        }),
      });

      const data = await response.json();
      const botReply = data.choices[0].message.content;

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botReply,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 2).toString(),
        text: '抱歉，请求失败。请检查网络连接。',
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }

    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <ExpoLinearGradient colors={['#0a0e27', '#1a1f3a', '#0a0e27']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.keyboardAvoid}
        >
          {/* 顶部标题 */}
          <View style={styles.header}>
            <Text style={styles.headerTitle}>AI 聊天助手</Text>
            <Text style={styles.headerSubtitle}>由星渊工作室创作</Text>
          </View>

          {/* 消息列表 */}
          <ScrollView
            ref={scrollViewRef}
            style={styles.messagesContainer}
            contentContainerStyle={styles.messagesContent}
            showsVerticalScrollIndicator={false}
          >
            {messages.map((message) => (
              <View
                key={message.id}
                style={[
                  styles.messageWrapper,
                  message.sender === 'user' && styles.userMessageWrapper,
                ]}
              >
                <ExpoLinearGradient
                  colors={
                    message.sender === 'user'
                      ? ['#00d4ff', '#8338ec']
                      : ['#1e293b', '#2d3561']
                  }
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={[
                    styles.messageBubble,
                    message.sender === 'user' && styles.userMessageBubble,
                  ]}
                >
                  <Text
                    style={[
                      styles.messageText,
                      message.sender === 'user' && styles.userMessageText,
                    ]}
                  >
                    {message.text}
                  </Text>
                </ExpoLinearGradient>
              </View>
            ))}

            {loading && (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#00d4ff" />
              </View>
            )}
          </ScrollView>

          {/* 输入区域 */}
          <View style={styles.inputArea}>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="输入你的问题..."
                placeholderTextColor="#a8b5d1"
                value={inputText}
                onChangeText={setInputText}
                multiline
                maxHeight={100}
                editable={!loading}
              />
              <TouchableOpacity
                style={[styles.sendButton, loading && styles.sendButtonDisabled]}
                onPress={sendMessage}
                disabled={loading || !inputText.trim()}
              >
                <ExpoLinearGradient
                  colors={['#00d4ff', '#8338ec', '#ff006e']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.sendButtonGradient}
                >
                  <Text style={styles.sendButtonText}>→</Text>
                </ExpoLinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </ExpoLinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(45, 53, 97, 0.5)',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#e0f7ff',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#a8b5d1',
  },
  messagesContainer: {
    flex: 1,
  },
  messagesContent: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  messageWrapper: {
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  userMessageWrapper: {
    justifyContent: 'flex-end',
  },
  messageBubble: {
    maxWidth: '80%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 255, 0.3)',
  },
  userMessageBubble: {
    borderColor: 'rgba(0, 212, 255, 0.5)',
  },
  messageText: {
    fontSize: 15,
    color: '#e0f7ff',
    lineHeight: 20,
  },
  userMessageText: {
    color: '#ffffff',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  inputArea: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: 'rgba(45, 53, 97, 0.5)',
    backgroundColor: 'rgba(26, 31, 58, 0.3)',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 10,
  },
  input: {
    flex: 1,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(26, 31, 58, 0.6)',
    color: '#e0f7ff',
    fontSize: 15,
    borderWidth: 1,
    borderColor: 'rgba(0, 212, 255, 0.3)',
    maxHeight: 100,
  },
  sendButton: {
    width: 44,
    height: 44,
    borderRadius: 10,
    overflow: 'hidden',
  },
  sendButtonDisabled: {
    opacity: 0.5,
  },
  sendButtonGradient: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendButtonText: {
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '600',
  },
});
