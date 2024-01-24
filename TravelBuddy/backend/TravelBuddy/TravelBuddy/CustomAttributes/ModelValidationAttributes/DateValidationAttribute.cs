namespace TravelBuddy.API.CustomAttributes.ModelValidationAttributes
{
	public class DateValidationAttribute : ValidationAttribute
	{
		protected override ValidationResult? IsValid(object? value, ValidationContext validationContext)
		{
			if (value is DateTime date && date.Date < DateTime.UtcNow) 
			{
				return new ValidationResult($"{validationContext.DisplayName} must be a date in the futre");
			}

			return ValidationResult.Success;
		}
	}
}
