export default function ({ store, redirect }) {
  // If the user has no session token
  if (!store.state.sessionToken) {
    return redirect('/')
  }
}
