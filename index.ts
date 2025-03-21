class UserRepository {
  create(name: string, email: string) {
    console.log("Saving to DB...");
    const newUser = { name, email };
    console.log(newUser);
  }

  findOneById(id: number) {
    console.log("Fetching from DB...");
  }
}

class EmailService {
  sendWelcomeEmail(email: string) {
    console.log("Sending email...");
  }
}

class UserService {
  constructor(
    private userRepository: UserRepository,
    private emailService: EmailService
  ) {}

  createUser(name: string, email: string) {
    this.userRepository.create(name, email);
    this.emailService.sendWelcomeEmail(email);
  }

  getUserById(id: number) {
    this.userRepository.findOneById(id);
  }

  deleteUserById(id: number) {
    console.log("Deleting user...");
  }
}

const userService = new UserService(new UserRepository(), new EmailService());
userService.createUser("John", "johnwick@gmail.com");
