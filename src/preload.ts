class Preload {
  public beforeMount() {
    console.log("BeforeMount here.");
  }
}

new Preload().beforeMount();
