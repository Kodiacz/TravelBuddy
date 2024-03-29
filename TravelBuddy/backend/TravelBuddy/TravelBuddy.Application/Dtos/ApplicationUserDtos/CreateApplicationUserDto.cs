﻿namespace TravelBuddy.Application.Dtos.ApplicationUserDto
{
	public class CreateApplicationUserDto
	{
        [Required]
		public string FirstName { get; set; } = null!;

		[Required]
		public string LastName { get; set; } = null!;

		[Required]
		[EmailAddress]
		public string Email { get; set; } = null!;

		[Required]
		[PasswordPropertyText]
		public string Password { get; set; } = null!;

		[Required]
		[PasswordPropertyText]
		public string ConfirmPassword { get; set; } = null!;

		//[JsonIgnore]
		//[BindNever]
		//[NotMapped]
		//[BindProperty(SupportsGet = true)]
		//public byte[] PasswordHash { get; set; } = null!;

		//[JsonIgnore]
		//[BindNever]
		//[NotMapped]
		//[BindProperty(SupportsGet = true)]
		//public byte[] PasswordSalt { get; set; } = null!;
	}
}
