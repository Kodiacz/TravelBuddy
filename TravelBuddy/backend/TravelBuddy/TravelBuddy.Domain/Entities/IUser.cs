namespace TravelBuddy.Domain.Entities
{
	public interface IUser 
	{
		//public User()
		//{
			//this.CreatedTrips = new HashSet<Trip>();    
			//this.InvitedToTrips = new HashSet<Trip>();    
		//}

		//public string FirstName { get; set; } = null!;

		//public string UserName { get; set; } = null!;
		//public string Email { get; set; } = null!;

		public string? ProfileImage { get; set; }

		public byte[]? PasswordSalt { get; set; }

		//public string Password { get; set; } = null!;
		public ICollection<Trip> CreatedTrips { get; set; }

		/// <summary>
		/// All trips in which current user is invited
		/// </summary>
		public ICollection<Trip> InvitedToTrips { get; set; }

		/// <summary>
		/// The date on which the user was registered
		/// </summary>
		public DateTime Created { get; set; }

		public DateTime LastLoggedIn { get; set; }
	}
}
