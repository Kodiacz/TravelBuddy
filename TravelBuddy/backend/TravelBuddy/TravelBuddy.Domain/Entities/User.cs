﻿namespace TravelBuddy.Domain.Entities
{
	public class User
	{
        public User()
        {
			this.Travels = new();    
        }

		public int Id { get; set; }

		public string FirstName { get; set; } = null!;

		public int LastName { get; set; }

		public string UserName { get; set; } = null!;

		public string Email { get; set; } = null!;

		public string Password { get; set; } = null!;

		public List<Trip> Travels { get; set; }
	}
}
