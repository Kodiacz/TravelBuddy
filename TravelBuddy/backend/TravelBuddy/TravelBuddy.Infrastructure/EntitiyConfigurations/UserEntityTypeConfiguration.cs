namespace TravelBuddy.Infrastructure.EntitiyConfigurations
{
	internal class UserEntityTypeConfiguration : IEntityTypeConfiguration<User>
	{
		public void Configure(EntityTypeBuilder<User> builder)
		{
			builder
				.HasKey(user => user.Id);

			builder
				.Property(user => user.FirstName)
				.IsRequired();
		}
	}
}
