namespace IELTSHub.Models
{
    public class IELTSResult
    {
        public string CandidateId { get; set; } = string.Empty;
        public string FullName { get; set; } = string.Empty;
        public string DateOfBirth { get; set; } = string.Empty;
        public string TestDate { get; set; } = string.Empty;
        public string TestType { get; set; } = "Academic";
        
        public double Listening { get; set; }
        public double Reading { get; set; }
        public double Writing { get; set; }
        public double Speaking { get; set; }
        public double Overall { get; set; }
        
        public string Status { get; set; } = "Verified";
    }
}
