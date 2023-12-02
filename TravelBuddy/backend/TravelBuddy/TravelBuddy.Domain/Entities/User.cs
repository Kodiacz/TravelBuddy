namespace TravelBuddy.Domain.Entities
{
	public class User
	{
        public User()
        {
			this.Travels = new HashSet<Trip>();    
        }

		public int Id { get; set; }

		public string FirstName { get; set; } = null!;

		public int LastName { get; set; }

		public string UserName { get; set; } = null!;

		public string Email { get; set; } = null!;

		public byte[]? PasswordHash { get; set; }

		public string? ProfileImage { get; set; }

		public byte[]? PasswordSalt { get; set; }

		public string Password { get; set; } = null!;

		public ICollection<Trip> Travels { get; set; }

		public DateTime Created { get; set; }

		public DateTime LastLoggedIn { get; set; }
	}
}
