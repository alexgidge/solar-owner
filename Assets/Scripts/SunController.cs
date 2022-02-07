using UnityEngine;

public class SunController : MonoBehaviour
{
    public GameObject SunSprite;
    
    // Start is called before the first frame update
    void Start()
    {
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    public void SetSOLOwnership(string isOwner)
    {
        if (isOwner == "true")
        {
            SunSprite.SetActive(true);
        }
        else
        {
            SunSprite.SetActive(false);
        }
    }
}