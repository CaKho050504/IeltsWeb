using IELTSHub.Models;

namespace IELTSHub.Data
{
    public static class MockData
    {
        public static List<IELTSResult> Results = new List<IELTSResult>
        {
            new IELTSResult
            {
                CandidateId = "IELTS20260001",
                FullName = "Nguyễn Văn A",
                DateOfBirth = "05/05/2004",
                TestDate = "20/09/2026",
                TestType = "Academic",
                Listening = 7.0,
                Reading = 6.5,
                Writing = 6.0,
                Speaking = 6.5,
                Overall = 6.5,
                Status = "Verified"
            },
            new IELTSResult
            {
                CandidateId = "IELTS20260002",
                FullName = "Trần Thị B",
                DateOfBirth = "12/10/2003",
                TestDate = "25/09/2026",
                TestType = "Academic",
                Listening = 8.0,
                Reading = 8.5,
                Writing = 7.0,
                Speaking = 7.5,
                Overall = 8.0,
                Status = "Verified"
            },
            new IELTSResult
            {
                CandidateId = "IELTS20260003",
                FullName = "Lê Hoàng C",
                DateOfBirth = "01/02/2005",
                TestDate = "28/09/2026",
                TestType = "General",
                Listening = 6.0,
                Reading = 6.0,
                Writing = 5.5,
                Speaking = 6.0,
                Overall = 6.0,
                Status = "Verified"
            },
            new IELTSResult
            {
                CandidateId = "IELTS20260004",
                FullName = "Phạm D",
                DateOfBirth = "20/11/2002",
                TestDate = "10/09/2026",
                TestType = "Academic",
                Listening = 7.5,
                Reading = 7.5,
                Writing = 6.5,
                Speaking = 7.0,
                Overall = 7.0,
                Status = "Verified"
            },
            new IELTSResult
            {
                CandidateId = "IELTS20260005",
                FullName = "Hoàng E",
                DateOfBirth = "15/08/2004",
                TestDate = "05/09/2026",
                TestType = "Academic",
                Listening = 9.0,
                Reading = 8.5,
                Writing = 7.5,
                Speaking = 8.0,
                Overall = 8.5,
                Status = "Verified"
            }
        };
    }
}
