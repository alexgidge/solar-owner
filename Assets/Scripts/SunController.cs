using UnityEngine;

public class SunController : MonoBehaviour
{
    public GameObject SunSprite;
    
    // Start is called before the first frame update
    void Start()
    {
        SunSprite.SetActive(false);
    }

    // Update is called once per frame
    void Update()
    {
        
    }

    void CheckSOLOwnership(bool isOwner)
    {
        SunSprite.SetActive(isOwner);
    }
}