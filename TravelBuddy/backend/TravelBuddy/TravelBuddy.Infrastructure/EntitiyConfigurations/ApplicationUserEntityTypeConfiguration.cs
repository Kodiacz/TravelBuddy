namespace TravelBuddy.Infrastructure.EntitiyConfigurations
{
	internal class ApplicationUserEntityTypeConfiguration : IEntityTypeConfiguration<ApplicationUser>
	{
		public void Configure(EntityTypeBuilder<ApplicationUser> builder)
		{
			builder
				.HasKey(user => user.Id);

			builder
				.Property(user => user.FirstName)
				.HasMaxLength(USER_FIRST_NAME_MAX_LENGTH)
				.IsRequired();

			builder
			.Property(user => user.LastName)
				.HasMaxLength(USER_LAST_NAME_MAX_LENGTH)
			.IsRequired();

			builder
				.Property(user => user.UserName)
				.HasMaxLength(USER_NAME_MAX_LENGTH)
				.IsRequired();

			builder
			.Property(user => user.Email)
				.HasMaxLength(USER_EMAIL_MAX_LENGTH)
			.IsRequired();

			builder
				.HasIndex(user => user.Email)
				.IsUnique();

			builder
				.Property(user => user.PasswordHash)
				.IsRequired();

			builder
				.HasCheckConstraint("CK_User_Created", $"{nameof(ApplicationUser.Created)} >= GETUTCDATE()");
		}
	}
}
