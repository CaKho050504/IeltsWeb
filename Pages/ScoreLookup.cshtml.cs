using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using IELTSHub.Models;
using IELTSHub.Data;

namespace IELTSHub.Pages
{
    public class ScoreLookupModel : PageModel
    {
        [BindProperty]
        public string CandidateId { get; set; } = string.Empty;

        [BindProperty]
        public string FullName { get; set; } = string.Empty;

        [BindProperty]
        public string DateOfBirth { get; set; } = string.Empty;

        public IELTSResult? SearchResult { get; set; }
        public bool IsSearched { get; set; } = false;

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            IsSearched = true;
            
            if (string.IsNullOrWhiteSpace(CandidateId) || 
                string.IsNullOrWhiteSpace(FullName) || 
                string.IsNullOrWhiteSpace(DateOfBirth))
            {
                return Page();
            }

            // Search in mock data
            SearchResult = MockData.Results.FirstOrDefault(r => 
                r.CandidateId.Equals(CandidateId.Trim(), StringComparison.OrdinalIgnoreCase) &&
                r.FullName.Equals(FullName.Trim(), StringComparison.OrdinalIgnoreCase) &&
                r.DateOfBirth == DateOfBirth.Trim());

            return Page();
        }
    }
}
