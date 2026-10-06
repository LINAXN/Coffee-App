import { StyleSheet, Text, View, TextInput, Pressable, useWindowDimensions } from 'react-native';

const Login = () => {
  const { width } = useWindowDimensions();

  const isWeb = width >= 768;

  return (
    <View style={styles.container}>
      <View style={[styles.content, isWeb && styles.webContent]}>

        <View style={styles.header}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>
            Welcome to Coffee Journal
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.form}>

            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="#999"
            />

            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="#999"
              secureTextEntry
            />

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>

          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F3EE',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 120,
  },

  content: {
    width: '100%',
    maxWidth: 500,
  },

  webContent: {
    maxWidth: 450,
  },

  header: {
    marginBottom: 24,
  },

  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#3B2921',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: '#777',
  },

  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,

    // Web + mobile friendly
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 3,
  },

  form: {
    gap: 16,
  },

  input: {
    width: '100%',
    height: 52,
    borderWidth: 1,
    borderColor: '#DDD5CE',
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#FAFAFA',
  },

  button: {
    width: '100%',
    height: 52,
    borderRadius: 12,
    backgroundColor: '#6F4E37',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Login;